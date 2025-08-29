/**
 * Take a list of blobs and file names and create a zip file
 * @param {Array[Blob]} blobs List of blobs to zip
 * @param {Array[string]} fileNames List of file names to zip
 * @returns {Promise<Blob>} The zipped file
 */
export function createZip(blobs: any, fileNames: any): Promise<Blob>;
