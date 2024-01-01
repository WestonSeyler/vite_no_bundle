import os from 'os'
import path from 'path'
//兼容windos处理
export function slash(p: string): string {
    return p.replace(/\\/g, "/");
}


export const isWindows = os.platform() === "win32";


export function normalizePath(id: string): string {
    return path.posix.normalize(isWindows ? slash(id) : id);
}