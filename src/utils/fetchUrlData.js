export async function fetchUrlData(url) {
    const readableStream = await fetch(url);
    const response = await readableStream.json();
    return response;
}