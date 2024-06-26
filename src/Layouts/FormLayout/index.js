import React, { useContext } from 'react';
import Form from '../../Component/Form';
import { FormLayoutContainer, FormLayoutTitle, Space } from './FormLayout.style';
import Button from '../../Component/Button';
import { MinitabContext } from '../../Context/MinitabContext';
import styled from 'styled-components';

const GetStarted = styled.div`
    padding: ${({theme})=>theme.size(1)}px;
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    gap: ${({theme})=>theme.size(1)}px;
    p{
        text-align: center;
    }
    div{
        display: flex;
        justify-content: center;
        // border: 1px solid green;
    }
`

const FormLayout = () => {
    const { minitabData, dispatch } = useContext(MinitabContext);

    return (
        <FormLayoutContainer>
            <FormLayoutTitle>
                <h3>R.O Algorithme de Transport Minitab</h3>
                {minitabData.isGettingStarted && (
                    <Button variant='white' type='button' text='Réinitialiser' onClick={()=>dispatch({type:'reinitialiser'})}/>
                )}
            </FormLayoutTitle>
            {minitabData.isGettingStarted ? (
                <Form/>

            ): (
                <GetStarted>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque officia consequatur ut voluptas quaerat sapiente provident voluptatem itaque impedit! Ipsam qui dolore debitis ab. Animi cumque possimus corrupti dolorum deleniti.</p>
                    <div>
                    <Button variant='outline' type='button' text='Commencer' onClick={()=>dispatch({type:'start'})}/>
                    </div>
                </GetStarted>
            )}
            <Space/>
        </FormLayoutContainer>
    )
}

export default FormLayout;