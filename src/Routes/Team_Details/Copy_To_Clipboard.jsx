import React from 'react'
import CopyToClipboard from "react-copy-to-clipboard";



export default function Copy_To_Clipboard({data}) {
    return (
        <div>

            <CopyToClipboard text={data}
            >
                Copy
            </CopyToClipboard>
        </div>
    )
}
