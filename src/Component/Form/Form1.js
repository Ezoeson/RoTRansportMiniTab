import React, { useContext } from 'react';
import { FormWrapper, Form, FormTitle,Form1Inputs, BtnContainer } from './Form.Style';
import InputNumber from '../Input';
import Button from '../Button';
import { MinitabContext } from '../../Context/MinitabContext';
import styled from 'styled-components';
import { motion } from 'framer-motion';




const Form1 = () => {
    const {minitabData, dispatch} = useContext(MinitabContext);

    const onSubmitForm1 = (e) =>{
        e.preventDefault();
        const data= new FormData(e.target);
        const nbMagasins =  Object.fromEntries(data.entries());
        dispatch({type: 'addMagasins', nbA: Number(nbMagasins.nbA), nbB: Number(nbMagasins.nbB)});
    }

    return (
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            type: 's',
            damping: 15,
            stiffness: 500,
          },
        }}
        exit={{ opacity: 0 }}
      >
        <FormWrapper>
          <Form onSubmit={(e) => onSubmitForm1(e)}>
            <FormTitle>Renseignements générales</FormTitle>
            <Form1Inputs>
              <div>
                <label>Nombre de magasins de dépôts:</label>
                <InputNumber
                  name='nbA'
                  disabled={
                    minitabData.nbLigne != 0 && minitabData.nbColonne != 0
                  }
                />
              </div>
              <div>
                <label>Nombre de magasins de déstination:</label>
                <InputNumber
                  name='nbB'
                  disabled={
                    minitabData.nbLigne != 0 && minitabData.nbColonne != 0
                  }
                />
              </div>
            </Form1Inputs>
            {minitabData.nbLigne == 0 && minitabData.nbColonne == 0 && (
              <BtnContainer>
                <Button variant='secondary' type='submit' text='Ajout' />
              </BtnContainer>
            )}
          </Form>
          {minitabData.nbLigne != 0 && minitabData.nbColonne != 0 && (
            <BtnContainer>
              <Button
                variant='secondary'
                type='button'
                text='Modifier'
                onClick={() => dispatch({ type: 'editLigneColonne' })}
              />
            </BtnContainer>
          )}
        </FormWrapper>
      </motion.div>
    );
}

export default Form1;