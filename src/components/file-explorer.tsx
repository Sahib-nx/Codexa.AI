import { CopyCheckIcon, CopyIcon } from "lucide-react";
import { CodeView } from "./code-view";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup
} from "@/components/ui/resizable";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
    BreadcrumbEllipsis,
} from "@/components/ui/breadcrumb";
import { Fragment, useCallback, useMemo, useState } from "react";
import { Hint } from "./hint";
import { Button } from "./ui/button";
import { convertFilesToTreeItems } from "@/lib/utils";
import { TreeView } from "./tree-view";

type FileCollection = { [path: string]: string };

function getLanguageFromExtension(filename: string): string {
    const extension = filename.split(".").pop()?.toLowerCase();
    return extension || "text";
};

interface FileBreadcrumbProps {
    filePath: string
};

const FileBreadcrumb = ({ filePath }: FileBreadcrumbProps) => {
    const pathSegments = filePath.split("/");
    const maxSegment = 4;

    const renderBreadcrumbItems = () => {
<<<<<<< HEAD
        if (pathSegments.length <= maxSegment) {
=======
        if(pathSegments.length <= maxSegment) {
>>>>>>> 8b01bc7c3e1081451a649c585a06e2aa939df7a1
            //Show all segments if 4 or less 
            return pathSegments.map((segment, index) => {
                const isLast = index === pathSegments.length - 1;

                return (
                    <Fragment key={index}>
                        <BreadcrumbItem>
<<<<<<< HEAD
                            {isLast ? (
                                <BreadcrumbPage className="font-medium">{segment}</BreadcrumbPage>
                            ) : (
                                <span className="text-muted-foreground">
                                    {segment}
                                </span>
                            )}
=======
                        {isLast ? (
                            <BreadcrumbPage className="font-medium">{segment}</BreadcrumbPage>
                        ) : (
                            <span className="text-muted-foreground">
                                {segment}
                            </span>
                        )}
>>>>>>> 8b01bc7c3e1081451a649c585a06e2aa939df7a1
                        </BreadcrumbItem>
                        {!isLast && <BreadcrumbSeparator />}
                    </Fragment>
                )
            })
<<<<<<< HEAD
        } else {
=======
        }  else {
>>>>>>> 8b01bc7c3e1081451a649c585a06e2aa939df7a1
            const firstSegment = pathSegments[0];
            const lastSegments = pathSegments[pathSegments.length - 1];

            return (
                <>
<<<<<<< HEAD
                    <BreadcrumbItem>
                        <span className="text-muted-foreground">
                            {firstSegment}
                        </span>
                        <BreadcrumbSeparator />

                        <BreadcrumbItem>
                            <BreadcrumbEllipsis />
                        </BreadcrumbItem>

                        <BreadcrumbSeparator />

                        <BreadcrumbItem>
                            <BreadcrumbPage className="font-medium">
                                {lastSegments}
                            </BreadcrumbPage>
                        </BreadcrumbItem>

                    </BreadcrumbItem>
=======
                <BreadcrumbItem>
                <span className="text-muted-foreground">
                    {firstSegment}
                </span>
                <BreadcrumbSeparator/> 

                <BreadcrumbItem>
                <BreadcrumbEllipsis/>
                </BreadcrumbItem>

                <BreadcrumbSeparator />

                <BreadcrumbItem>
                <BreadcrumbPage className="font-medium">
                {lastSegments}
                </BreadcrumbPage>
                </BreadcrumbItem> 

                </BreadcrumbItem>
>>>>>>> 8b01bc7c3e1081451a649c585a06e2aa939df7a1
                </>
            )
        }
    };
<<<<<<< HEAD

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {renderBreadcrumbItems()}
            </BreadcrumbList>
=======
    
    return (
        <Breadcrumb>
        <BreadcrumbList>
        {renderBreadcrumbItems()}
        </BreadcrumbList>
>>>>>>> 8b01bc7c3e1081451a649c585a06e2aa939df7a1
        </Breadcrumb>
    )
}

interface FileExplorerProps {
    files: FileCollection;
}

export const FileExplorer = ({
    files,
}: FileExplorerProps) => {
    const [copied, setCopied] = useState(false);
    const [selectedFile, setSelectedFile] = useState<string | null>(() => {
        const fileKeys = Object.keys(files);
        return fileKeys.length > 0 ? fileKeys[0] : null;
    });

    const treeData = useMemo(() => {
        return convertFilesToTreeItems(files);
    }, [files]);

    const handleFileSelect = useCallback((
<<<<<<< HEAD
        filePath: string
    ) => {
        if (files[filePath]) {
=======
         filePath: string
    ) => {
        if(files[filePath]) {
>>>>>>> 8b01bc7c3e1081451a649c585a06e2aa939df7a1
            setSelectedFile(filePath);
        }

    }, [files]);

    const handleCopy = useCallback(() => {
<<<<<<< HEAD
        if (selectedFile) {
=======
        if(selectedFile) {
>>>>>>> 8b01bc7c3e1081451a649c585a06e2aa939df7a1
            navigator.clipboard.writeText(files[selectedFile]);
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        }
    }, [selectedFile, files]);

    return (
        <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={30} minSize={30} className="bg-sidebar">
                <TreeView
                    data={treeData}
                    value={selectedFile}
                    onSelect={handleFileSelect}
                />
            </ResizablePanel>
            <ResizableHandle className="hover:bg-primary transition-colors" />
            <ResizablePanel defaultSize={70} minSize={50} className="bg-content">
                {selectedFile && files[selectedFile] ? (
                    <div className="h-full w-full flex flex-col">
                        <div className="border-b bg-sidebar px-4 py-2 flex justify-between items-center gap-x-2">
<<<<<<< HEAD
                            <FileBreadcrumb
                                filePath={selectedFile}
                            />
=======
                            <FileBreadcrumb 
                            filePath={selectedFile}
                            /> 
>>>>>>> 8b01bc7c3e1081451a649c585a06e2aa939df7a1
                            <Hint text="Copy to clipboard" side="bottom" align="center">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="ml-auto"
                                    onClick={handleCopy}
                                    disabled={copied}
                                >
<<<<<<< HEAD
                                    {copied ? <CopyCheckIcon /> : <CopyIcon />}
=======
                                   {copied ? <CopyCheckIcon/> : <CopyIcon />}
>>>>>>> 8b01bc7c3e1081451a649c585a06e2aa939df7a1
                                </Button>
                            </Hint>
                        </div>
                        <div className="flex-1 overflow-auto">
                            <CodeView
                                code={files[selectedFile]}
                                lang={getLanguageFromExtension(selectedFile)}
                            />
                        </div>
                    </div>
                ) : (
                    <div className="flex h-full items-center justify-center text-muted-foreground">
                        Select a file to view it&apos;s content
                    </div>
                )}
            </ResizablePanel>
        </ResizablePanelGroup>
    )
};