import { Smiley, SmileyMeh, SmileySad } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";
import { useContext, useState } from "react";
import { JournalHistoryContext } from "../../contexts/HistoryContext";
import { TotalEntries } from "../TotalEntries";



export function Summary() {

    const  { journalEntries } = useContext(JournalHistoryContext)
    const { fetchJournal } = useContext(JournalHistoryContext)

    const [selectedMood, setSelectedMood] = useState<string | null>(null)
    const [ showTotal, setShowTotal ] = useState<boolean>(true);

    const handleMoodSelection = (mood: string) => {
        if (selectedMood === mood) {
            setShowTotal(true)
            setSelectedMood(null);
            
            fetchJournal();
            
        }
        else {
            setShowTotal(false)
            setSelectedMood(mood)
            fetchJournal(mood)
        }
   
        
    }
    
    const summary = journalEntries.reduce(
        (acc, journalEntries) => {
    if (journalEntries.mood === 'Happy') {
        acc.happy += 1;
        acc.total += 1;
    } else if (journalEntries.mood === 'Normal') {
        acc.normal += 1;
        acc.total += 1;
    } else {
        acc.sad += 1
        acc.total += 1;
    }

            return acc;
        }, 
    {
        happy: 0, 
        normal: 0,
        sad: 0,
        total: 0
    }
    )

    

    return(
        <div>
            <TotalEntries showTotal={showTotal} />
            <SummaryContainer>
                <SummaryCard 
                isSelected={selectedMood === 'Happy'}
                variant="Happy" 
                value="Happy"
                onClick={() => handleMoodSelection('Happy')}
                >
                    <header>
                        <span>Feliz</span>
                        <Smiley size={32} color="#00b37e"/>
                    </header>

                    <strong>{summary.happy > 0 ? (summary.happy + ' dia(s)') : ''}</strong>
                </SummaryCard>
                <SummaryCard 
                isSelected={selectedMood === 'Normal'}
                variant="Normal" 
                value="Normal"
                onClick={() => handleMoodSelection('Normal')}
                >
                    <header>
                        <span>Normal</span>
                        <SmileyMeh size={32} color="#00b37e"/>
                    </header>

                    <strong>{summary.normal > 0 ? (summary.normal + ' dia(s)') : ''}</strong>
                </SummaryCard>
                <SummaryCard 
                isSelected={selectedMood === 'Sad'}
                variant="Sad" 
                value="Sad"
                onClick={() => handleMoodSelection('Sad')}
                >
                    <header>
                        <span>Triste</span>
                        <SmileySad size={32} color="#00b37e"/>
                    </header>

                    <strong>{summary.sad > 0 ? (summary.sad + ' dia(s)') : ''}</strong>
                </SummaryCard>
                
            </SummaryContainer>
        </div>
    )
}