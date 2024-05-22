import { SavedHistory } from "@/data/savedHistory"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface SidebarProps {
  searchHistory: SavedHistory[]
  className: string
  onHistorySelect: (historyItem: any) => void
}

export function Sidebar({
  className,
  searchHistory,
  onHistorySelect,
}: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-2">
        <div className="py-2">
          <h2 className="relative mx-0 px-10  py-2   text-white bg-zinc-500 rounded-tl-lg  text-sm font-sans tracking-tight font-extrabold ">
            Saved / Keywords
          </h2>
          <ScrollArea className="h-[600px] px-1 border border-zinc-400 rounded-bl-lg">
            <div className="space-y-1 p-2">
              {searchHistory?.map((searchItem, i) => (
                <div
                  key={`${searchItem}-${i}`}
                  className="flex justify-between items-center"
                >
                  <div className="w-full">
                    <Button
                      key={`${searchItem}-${i}`}
                      variant="ghost"
                      className="w-full h-full justify-start font-normal wrap text-left"
                      onClick={() => onHistorySelect(searchItem)}
                    >
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-2 h-4 w-4 flex-shrink-0"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                          />
                        </svg>
                        <span className="">
                          {searchItem.searchValue.length > 33
                            ? `${searchItem.searchValue.substring(0, 20)}...`
                            : searchItem.searchValue}
                        </span>
                      </div>
                    </Button>
                  </div>
                  {/* TODO: Delete Button */}
                  {/* <Button
                    variant="ghost"
                    className="ml-2"
                    // onClick={() => handleDelete(searchItem)}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m6 0V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </Button> */}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}
