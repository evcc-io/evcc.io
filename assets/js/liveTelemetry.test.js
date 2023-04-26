import { expect, it } from "vitest";
import { fmtKW, fmtKWh } from "./liveTelemetry";

it("fmtKW", () => {
  expect(fmtKW(1)).toEqual({ value: 1, unit: "kW", decimals: 0 });
  expect(fmtKW(12)).toEqual({ value: 12, unit: "kW", decimals: 0 });
  expect(fmtKW(123)).toEqual({ value: 123, unit: "kW", decimals: 0 });
  expect(fmtKW(1234)).toEqual({ value: 1.234, unit: "MW", decimals: 2 });
  expect(fmtKW(12345)).toEqual({ value: 12.345, unit: "MW", decimals: 1 });
  expect(fmtKW(123456)).toEqual({ value: 123.456, unit: "MW", decimals: 0 });
  expect(fmtKW(1234567)).toEqual({ value: 1.234567, unit: "GW", decimals: 2 });
  expect(fmtKW(12345678)).toEqual({
    value: 12.345678,
    unit: "GW",
    decimals: 1,
  });
  expect(fmtKW(123456789)).toEqual({
    value: 123.456789,
    unit: "GW",
    decimals: 0,
  });
  expect(fmtKW(1234567890)).toEqual({
    value: 1234.56789,
    unit: "GW",
    decimals: 0,
  });
  expect(fmtKW(12345678901)).toEqual({
    value: 12345.678901,
    unit: "GW",
    decimals: 0,
  });
});

it("fmtKWh", () => {
  expect(fmtKWh(1)).toEqual({ value: 1, unit: "kWh", decimals: 0 });
  expect(fmtKWh(12)).toEqual({ value: 12, unit: "kWh", decimals: 0 });
  expect(fmtKWh(123)).toEqual({ value: 123, unit: "kWh", decimals: 0 });
  expect(fmtKWh(1234)).toEqual({ value: 1.234, unit: "MWh", decimals: 2 });
  expect(fmtKWh(12345)).toEqual({ value: 12.345, unit: "MWh", decimals: 1 });
  expect(fmtKWh(123456)).toEqual({ value: 123.456, unit: "MWh", decimals: 0 });
  expect(fmtKWh(1234567)).toEqual({
    value: 1.234567,
    unit: "GWh",
    decimals: 2,
  });
  expect(fmtKWh(12345678)).toEqual({
    value: 12.345678,
    unit: "GWh",
    decimals: 1,
  });
  expect(fmtKWh(123456789)).toEqual({
    value: 123.456789,
    unit: "GWh",
    decimals: 0,
  });
  expect(fmtKWh(1234567890)).toEqual({
    value: 1234.56789,
    unit: "GWh",
    decimals: 0,
  });
  expect(fmtKWh(12345678901)).toEqual({
    value: 12345.678901,
    unit: "GWh",
    decimals: 0,
  });
});
