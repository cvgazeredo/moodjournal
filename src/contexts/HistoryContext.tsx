import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Journal {
    id: number;
    text: string;
    mood: 'Happy' | 'Normal' | 'Sad';
    createdAt: string;
}

interface CreateNewEntryInput {
    text: string,
    mood: 'Happy' | 'Normal' | 'Sad'
}

interface JournalHistoryContextType {
    journalEntries: Journal[]
    fetchJournal: (type?: string) => Promise<void>
    createNewJournalEntry: (data: CreateNewEntryInput) => Promise<void>
}

export const JournalHistoryContext = createContext({} as JournalHistoryContextType)

interface JournalProviderProps {
    children: ReactNode;
}




export function JournalProvider({ children }: JournalProviderProps) {
    const [journalEntries, setJournalEntry] = useState<Journal[]>([])

    async function fetchJournal(type?: string) {

        const response = await api.get('journal', {
            params: {
                _sort: 'createdAt',
                _order: 'desc',
                mood: type,
            }
        })
        
        
        setJournalEntry(response.data);
    }

    async function createNewJournalEntry(data: CreateNewEntryInput) {
        const response = await api.post('journal', {
            text: data.text,
            mood: data.mood,
            createdAt: new Date(),
        })
        
        setJournalEntry(state => [response.data, ...state])

    }

    

    useEffect(() => {
        fetchJournal()
    }, [])
    
    return (
        <JournalHistoryContext.Provider value={{ 
            journalEntries, 
            fetchJournal,
            createNewJournalEntry,
            }}>
            {children}

        </JournalHistoryContext.Provider>
    )
}