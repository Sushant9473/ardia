import assert from "node:assert/strict";
import { test } from "node:test";

const { listDismissed, swipeProgress } = await import("./swipeMotion.ts");

test("pulling a held swipe back past half its confirm distance closes the history list (#1602)", () => {
  assert.equal(listDismissed(swipeProgress(75)), false, "still confirmed");
  assert.equal(listDismissed(swipeProgress(40)), false, "a wobble while picking a row keeps the list");
  assert.equal(listDismissed(swipeProgress(37)), true);
  assert.equal(listDismissed(swipeProgress(0)), true, "back where the swipe began");
  assert.equal(listDismissed(swipeProgress(-30)), true, "past where the swipe began");
});
