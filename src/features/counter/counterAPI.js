// A mock function to mimic making an async request for data
export function fetchCount(amount) { //default function parameters amount = 1
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}
