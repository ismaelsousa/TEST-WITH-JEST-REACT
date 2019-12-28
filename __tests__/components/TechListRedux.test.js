import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {render, fireEvent} from '@testing-library/react'
import {addTech} from '~/store/modules/techs/actions'
import TechList from '../../src/components/TechListRedux'

jest.mock('react-redux')

describe('TechListRedux component',()=>{
  it('should render tech list',()=>{

    useSelector.mockImplementation(cb=> cb({
      techs:['Node.js', 'ReactJS']
    }));
    const {getByText, getByTestId, debug}=  render(<TechList/>)
    debug()
    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'))
    expect(getByTestId('tech-list')).toContainElement(getByText('ReactJS'))
  })
  it('should be able to add new tech',()=>{
    const {getByTestId,getByLabelText } = render(<TechList/>)

    const dispatch = jest.fn()
    useDispatch.mockReturnValue(dispatch)
    fireEvent.change(getByLabelText('Tech'),{target:{value:'Node.js'}})
    fireEvent.submit(getByTestId('tech-form'))
    expect(dispatch).toHaveBeenCalledWith(addTech('Node.js'))

  })
})