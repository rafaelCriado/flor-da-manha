const { test, trait } = use("Test/Suite")("System of Files");

const Helpers = use("Helpers");

trait("Test/ApiClient");
trait("DatabaseTransactions");

test("it should upload a file and return their id", async ({
  assert,
  client
}) => {
  const response = await client
    .post("/files")
    .attach("file", Helpers.tmpPath("logo_teste.png"))
    .end();

  response.assertStatus(200);
  assert.exists(response.body.id);
});

test("it should show a file registered in database", async ({
  assert,
  client
}) => {
  const responseInsertFile = await client
    .post("/files")
    .attach("file", Helpers.tmpPath("logo_teste.png"))
    .end();

  const file = responseInsertFile.body;

  const response = await client.get(`/files/${file.id}`).end();

  response.assertStatus(200);
});
