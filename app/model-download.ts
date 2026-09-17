/** Static hosts may serve .gz as a compressed response or as a gzip file.
 * Fetch already decodes Content-Encoding; inspect the payload to avoid decoding twice.
 */
export async function decodeModelResponse(response:Response,expectedBytes:number,compressed:boolean):Promise<ArrayBuffer>{
 if(!response.ok)throw new Error('해부학 파일을 불러오지 못했습니다.');
 const payload=await response.arrayBuffer(),signature=new Uint8Array(payload,0,Math.min(2,payload.byteLength));
 const gzip=compressed&&signature[0]===0x1f&&signature[1]===0x8b;
 const buffer=gzip?await new Response(new Blob([payload]).stream().pipeThrough(new DecompressionStream('gzip'))).arrayBuffer():payload;
 if(buffer.byteLength!==expectedBytes)throw new Error('해부학 파일이 완전하지 않습니다. 뷰어를 다시 불러오세요.');
 return buffer;
}
