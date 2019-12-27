import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import TechList from '../../src/components/TechList'
describe('TechList component',()=>{
  it('should be able to add new tech',()=>{
   const {getByText, getByTestId, getByLabelText} =  render(<TechList/>)
   fireEvent.change(getByLabelText('Tech',{
     target:{value:'Node.js'}
   }))
   fireEvent.submit(getByTestId('tech-form'))
   fireEvent.click(getByText('Adicionar'))
   expect(getByTestId("tech-list")).toContainElement(getByText("Node.js"))
   expect(getByLabelText('Tech')).toHaveValue('')
  })
})