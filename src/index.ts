import { Directory } from "./directory";
import { File } from "./file";

export class FSBrowser {
    private currentDirectory: Directory;

    public levelUp(levels: number = 1){

    };

    public navigate(directoryName: string){

    };

    public list(): (Directory|File)[]{
        return null;
    };

    public getFile(name: string): File{
        return null;
    }
}