import styled, { css } from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';

const ContentContainer = styled.div`
padding: 30px;
position: relative;
z-index: 2;
display: flex;
justify-content: center;
`

const InputContainer = styled.div`
outline: 3px solid grey;
border-radius: 5px;
* {
    background-color: ${props => props.color ? "#" + props.color : '#fff'};
}
`

const SearchInput = styled.input`
height: 34px;
border: none;
outline: none;
padding: 5px 10px;
font-size: 18px;
width: 500px;
color: ${props => props.color};
&::placeholder {
    color: ${props => props.color};
}
`

const StyledTextArea = styled.textarea`
border: none;
outline: none;
width: 502px;
padding: 5px 10px;
font-size: 18px;
`

const SearchInputContainer = styled.div``

const InputButtonsGroup = styled.div`
display: flex;
align-items: center;
flex-flow: wrap;
width: 525px;
`

const CardContainer = styled.div`
border: 1px solid #fff;
background-color: ${props => props.color ? "#" + props.color : '#fff'};
height: 30px;
width: 30px;
border-radius: 50px;
margin: 5px;
cursor: pointer;
transition: transform .2s; 

:hover{
    transform: scale(1.1); 
}
`


const Content = () => {
    const [isNoteInputTouched, setIsNoteInputTouched] = useState(false)
    const colorCodes = [
        "f44336",
        "e91e63",
        "9c27b0",
        "673ab7",
        "3f51b5",
        "2196f3",
        "03a9f4",
        "00bcd4",
        "009688",
        "4caf50",
        "8bc34a",
        "ffeb3b",
        "ffc107",
        "ff9800",
        "ff5722",
        "795548",
        "9e9e9e",
        "607d8b"
    ]
    const [formFields, setFormFields] = useState({
        subject: "",
        content: "",
        cardColor: "fff"
    })
    const [cardValues, setCardValues] = useState([])
    const [clicked, setClicked] = useState(false)


    const handleCardColor = (selectedColor) => {
        setFormFields({
            ...formFields,
            cardColor: selectedColor
        })
    }

    useEffect(() => {
        setIsNoteInputTouched(false)
        setFormFields({
            subject: "",
            content: "",
            cardColor: "fff"
        })
    }, [cardValues])


    useEffect(() => {
        if (formFields.subject) {
            setCardValues([...cardValues, formFields])
        }
    }, [clicked])


    useEffect(() => {
        window.addEventListener('click', function (e) {
            if (!document.getElementById('clickbox').contains(e.target)) {
                setClicked(true)
            }
        });
    }, [])


    return (
        <ContentContainer>
            <InputContainer color={formFields.cardColor} id="clickbox">
                <SearchInputContainer>
                    <SearchInput type="text"
                        placeholder='Take a note'
                        value={formFields.subject}
                        onChange={(e) => setFormFields({ ...formFields, subject: e.target.value })}
                        onFocus={() => setIsNoteInputTouched(true)}
                        color={formFields.cardColor !== "fff" ? "#fff" : "#000"}
                    />
                </SearchInputContainer>
                {isNoteInputTouched || formFields.subject.length > 0 ?
                    <>
                        <SearchInputContainer>
                            <StyledTextArea
                                rows="2"
                                cols="50"
                                value={formFields.content}
                                onChange={(e) => setFormFields({ ...formFields, content: e.target.value })}
                            />
                        </SearchInputContainer>
                        <InputButtonsGroup>
                            {colorCodes.map((item, index) => (
                                <CardContainer color={item} key={index} onClick={() => handleCardColor(item)} />
                            ))}
                        </InputButtonsGroup>
                    </>
                    : <></>
                }
            </InputContainer>
        </ContentContainer>
    )
}


export default Content