import { type ReactNode } from "react";

type HintBoxPrps={
    mode:'hint';
    children:ReactNode;
};
type WariningBoxProps={
    mode:'warning';
    severity:'low' | 'medium' |'high';
    children:ReactNode
};
type InfoBoxProps=HintBoxPrps|WariningBoxProps

export default function InfoBox(props:InfoBoxProps){//info and warning
    const {children,mode}=props;
    
    if(mode==='hint'){
        return (
            <aside className="infobox infobox-hint">
                
                <p>{children}</p>
            </aside>
            );

    }

    const {severity}=props;    
    return(
        <aside className={`infobox infobox-warning warning--${severity}`}>
           <h2>Warning</h2>
           <p>{children}</p>
        </aside>
    );
    
}