import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Description, MoodButton, Overlay, SelectMoodContainer, Title } from './styles'
import { Smiley, SmileyMeh, SmileySad, X } from 'phosphor-react'
import * as z from 'zod';
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { useContext, useState } from 'react';
import { JournalHistoryContext } from '../../contexts/HistoryContext';
import { ButtonTrackMyMoodModal } from '../Header/styles';


const TrackMyMoodFormSchema = z.object({
    mood: z.enum(['Happy', 'Normal', 'Sad']),
    text: z.string(),
})

type TrackMyMoodFormInputs = z.infer<typeof TrackMyMoodFormSchema>;

export function TrackMyMoodModal ( ) {
   
    const { createNewJournalEntry  } = useContext(JournalHistoryContext)
    
    const [open, setOpen] = useState(false);
  
    const { 
        control,
        register, 
        handleSubmit,
        reset
    } = useForm<TrackMyMoodFormInputs>({
        resolver: zodResolver(TrackMyMoodFormSchema)
    })
    
    async function handleTrackMyMood(data: TrackMyMoodFormInputs) {
        
        const { text, mood } = data

        await createNewJournalEntry({
            mood,
            text,
        })
        reset()
        
        setOpen(false)
  
    }

    return(
        <Dialog.Root open={open} onOpenChange={setOpen}>
                    <Dialog.Trigger asChild>
                        <ButtonTrackMyMoodModal>Registrar Humor</ButtonTrackMyMoodModal>
                    </Dialog.Trigger>
                    
                    <Dialog.Portal>
                    <Overlay />
                                
                        <Content>
                            <Title>Registrar Meu Humor</Title>

                            <CloseButton>
                                <X size={24}/> 
                            </CloseButton>

                            <Description>
                                Selecione o seu humor e escreva o que você está sentindo.
                            </Description>

                            <form onSubmit={handleSubmit(handleTrackMyMood)}>
                                <h4>Como você está se sentindo?</h4>

                                <Controller 
                                control={control} 
                                name="mood"
                                render={({ field }) => {
                                    
                                    return (
                                        <SelectMoodContainer 
                                        onValueChange={(value: TrackMyMoodFormInputs['mood']) =>
                                        field.onChange(value)}
                                        
                                        value={field.value}>
                                    <MoodButton variant="Happy" value="Happy">
                                        <Smiley size={25} />
                                    </MoodButton>

                                    <MoodButton variant="Normal" value="Normal">
                                        <SmileyMeh size={25} />
                                    </MoodButton>

                                    <MoodButton variant="Sad" value="Sad">
                                        <SmileySad size={25} />
                                    </MoodButton>
                                                                
                                </SelectMoodContainer>
                                    )
                                }}
                                />
                                <textarea 
                                placeholder='Escreva aqui pensamentos, reflexões ou sentimentos relevantes.' 
                                required 
                                {...register('text')}
                                />
                                
                                    <button type="submit">Enviar</button>
                                
                            </form>
                            
                        </Content>
                </Dialog.Portal>
                </Dialog.Root>
    )
}