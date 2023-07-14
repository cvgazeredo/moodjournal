import { useContext} from "react"
import { JournalHistoryContext } from "../../contexts/HistoryContext"
import { TotalEntriesContainerTest } from "./styles";

interface TotalEntriesProps {
    showTotal?: boolean
}

export function TotalEntries({ showTotal = true }: TotalEntriesProps) {

    const  { journalEntries } = useContext(JournalHistoryContext)

    return(
        <TotalEntriesContainerTest>
            {showTotal ? ('Total: ' + journalEntries.length + ' dia(s)') : '' }
        </TotalEntriesContainerTest>
    )
}