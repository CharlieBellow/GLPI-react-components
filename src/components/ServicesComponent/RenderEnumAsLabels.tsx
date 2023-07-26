import {Student, ChalkboardTeacher, UserCircle, GraduationCap, UserGear} from 'phosphor-react';
import InfoPill from './InfoPill';
interface RenderEnumAsLabelsProps{
    people: string;
}

function RenderEnumAsLabels(props: RenderEnumAsLabelsProps){
    let personType : string[] = [];
    if(props.people){
        const charArray = Array.from(props.people);
        charArray.shift()
        charArray.pop()
        console.log(charArray);
        const people = charArray.join("");
        console.log(people);
        personType = people.split(',')
    }

    console.log(personType);
    return(
        <div className="mt-4 flex flex-row gap-2">
            {Array.isArray(personType) && personType.map((person) => {
                return(
                    <div>
                        {person === 'Discente' && <InfoPill color='bg-blue-ufal' icon={<Student size={24}/>} content={person}/>}
                        {person === 'Docente' && <InfoPill color='bg-green-500' icon={<ChalkboardTeacher size={24}/>} content={person}/>}
                        {person === 'Técnico Administrativo' && <InfoPill color='bg-amber-500' icon={<UserCircle size={24}/>} content={person}/>}
                        {person === 'Discente Pós-Graduação' && <InfoPill color='bg-violet-500' icon={<GraduationCap size={24}/>} content={person}/>}
                        {person === 'Terceirizado' && <InfoPill color='bg-fuschia-500' icon={<UserGear size={24}/>} content={person}/>}
                    </div>

                )
            }
        )}  
        </div>

    );
}
export default RenderEnumAsLabels;