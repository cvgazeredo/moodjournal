import { Smiley, SmileyMeh, SmileySad } from "phosphor-react";
import { Header } from "../../components/Header";
import { SummaryCard, SummaryContainer } from "../../components/Summary/styles";
import { useContext} from "react";
import { JournalHistoryContext } from "../../contexts/HistoryContext";
import { StatisticContainer } from "./styles";
import { LineChart } from "../../components/LineChart";
import { TotalEntries } from "../../components/TotalEntries";

export function Statistic() {

    const  { journalEntries } = useContext(JournalHistoryContext)
    const totalEntries = journalEntries.length

    const summary = journalEntries.reduce(
        (acc, journalEntries) => {
    if (journalEntries.mood === 'Happy') {
        acc.happy += 1;
        
    } else if (journalEntries.mood === 'Normal') {
        acc.normal += 1;
         
    } else {
        acc.sad += 1
         
    }
            return acc;
        }, 
    {
        happy: 0, 
        normal: 0,
        sad: 0,        
    }
    )


    return (
        <div>
        <Header />
        <TotalEntries />
        <SummaryContainer>
                <SummaryCard 
                isSelected
                variant="Happy" 
                value="Happy"
                >
                    <header>
                        <span>Feliz</span>
                        <Smiley size={32} color="#00b37e"/>
                    </header>

                    <strong>{((summary.happy / totalEntries) * 100).toLocaleString(undefined, {maximumFractionDigits: 0}) } %</strong>
                </SummaryCard>
                <SummaryCard 
                isSelected
                variant="Normal" 
                value="Normal"
                
                >
                    <header>
                        <span>Normal</span>
                        <SmileyMeh size={32} color="#00b37e"/>
                    </header>

                    <strong>{((summary.normal / totalEntries) * 100).toLocaleString(undefined, {maximumFractionDigits: 0}) } %</strong>
                </SummaryCard>
                <SummaryCard 
                isSelected
                variant="Sad" 
                value="Sad"
                
                >
                    <header>
                        <span>Triste</span>
                        <SmileySad size={32} color="#00b37e"/>
                    </header>

                    <strong>{((summary.sad / totalEntries) * 100).toLocaleString(undefined, {maximumFractionDigits: 0}) } %</strong>
                </SummaryCard>
                
        </SummaryContainer>
        <StatisticContainer>
            
            <LineChart />
        </StatisticContainer>
        </div>
    )
}