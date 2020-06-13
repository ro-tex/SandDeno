async function httpReqText(url: string): Promise<string> {
  let res = await fetch(url);
  return await res.text();
}

async function httpReqBytes(url: string): Promise<Uint8Array> {
  const res = await fetch(url);
  return new Uint8Array(await res.arrayBuffer());
}

function bytes2str(bytes: Uint8Array): string {
  return new TextDecoder().decode(bytes);
}

function str2bytes(s: string): Uint8Array {
  return new TextEncoder().encode(s);
}

async function print(bytes: Uint8Array) {
  Deno.writeAll(Deno.stdout, bytes);
}

export { httpReqText, httpReqBytes, bytes2str, str2bytes, print };
