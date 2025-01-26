import { ReactNode } from "react";

type SplitScreenProps = {
    children: [ ReactNode, ReactNode ];
    leftWidth?: number;
    rightWidth?: number;
}

const SplitScreen = ({ children, leftWidth }: SplitScreenProps) => {
    const [left, right] = children;
  
    return(
      <section className="flex flex-1 h-full">
        <div style={{width: `${leftWidth}rem`}} className="flex-shrink-0">
          {left}
        </div>
        <div className="flex-1 px-6 h-full">
          {right}
        </div>
      </section>
    )
  }

export default SplitScreen;