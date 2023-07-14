import { Smiley, SmileyMeh, SmileySad } from "phosphor-react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { MoodHistoryContainer, MoodHistoryTable, MoodColorTableTd } from "./styles";
import { useContext } from "react";
import { JournalHistoryContext } from "../../contexts/HistoryContext";


export function History() {

    const { journalEntries } = useContext(JournalHistoryContext);
    const dateFormatter = new Intl.DateTimeFormat('pt-BR');
    

    return(
        <div>
            <Header />
            <Summary />
            <MoodHistoryContainer>
            <MoodHistoryTable>
              <tbody>
                <tr>
                    <th>Conteúdo</th>
                    <th>Humor </th>
                    <th>Data</th>
                </tr>
                {journalEntries.map(entry => {

                    let MoodSpanIcon;

                    if (entry.mood === "Happy") {
                        MoodSpanIcon = <Smiley size={22}/>;
                    }
                    else if (entry.mood === "Normal") {
                        MoodSpanIcon = <SmileyMeh size={22}/>;
                    }
                    else {
                        MoodSpanIcon  = <SmileySad size={22} />;
                    }
                    return (
                    
                    <tr key={entry.id}>
                        <MoodColorTableTd variant={entry.mood} width="50%">{entry.text}</MoodColorTableTd>
                        <MoodColorTableTd variant={entry.mood}> 
                             
                            <span>{MoodSpanIcon}</span>
                        </MoodColorTableTd>
                        <MoodColorTableTd variant={entry.mood}>{dateFormatter.format(new Date(entry.createdAt))}</MoodColorTableTd>
                    </tr>
                    
                    )
                })}
                
                </tbody> 
            </MoodHistoryTable>
            </MoodHistoryContainer>

        </div>
    )
}