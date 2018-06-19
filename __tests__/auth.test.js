"use strict";

const mod = require("./../auth");

const jestPlugin = require("serverless-jest-plugin");
const lambdaWrapper = jestPlugin.lambdaWrapper;
const wrapped = lambdaWrapper.wrap(mod, { handler: "handler" });

describe("auth", () => {
  beforeAll(done => {
    //  lambdaWrapper.init(liveFunction); // Run the deployed lambda

    done();
  });

  it("return client error when query parameter client_id is missing", () => {
    return wrapped
      .run({
        queryStringParameters: {}
      })
      .then(response => {
        expect(response).toBeDefined();
        expect(response.statusCode).toBe(400);
      });
  });

  // it("implement tests here", () => {
  //   return wrapped
  //     .run({
  //       queryStringParameters: {
  //         client_id: "123456789"
  //       }
  //     })
  //     .then(response => {
  //       expect(response).toBeDefined();
  //     });
  // });
});
