// react, react-native
import React, { Component } from 'react'
import { Table, TableWrapper, Col, Cols, Cell } from 'react-native-table-component'

// styles
import style from './stylesTablePokemon'

// Fonte: https://www.npmjs.com/package/react-native-table-component

function handleHeights(height, length) {
  let ret = []
  for (let i = 0; i < length; i++) {
    ret.push(height)
  }
  return ret
}

export default function TablePokemon(props) {
  const lineHeight = props.lineHeight
  const heightArr = handleHeights(lineHeight, props.lineCount)
  return (
    <Table style={[style.table, { width: props.tableWidth }]} >
      {/* Left Wrapper */}
      <TableWrapper style={[style.leftWrapper, { width: props.leftWrapperWidth }]}>
        <Col data={props.tableTitle} heightArr={heightArr} textStyle={[style.titleText, { fontSize: props.fontSize }]}></Col>
      </TableWrapper>

      {/* Right Wrapper */}

      <TableWrapper style={[style.rightWrapper, { width: props.rightWrapperWidth }]}>
        <Cols data={props.tableData} heightArr={heightArr} textStyle={[style.text, { fontSize: props.fontSize }]} />
      </TableWrapper>

    </Table>
  )
}
/* export default class TablePokemon extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tableTitle: props.tableTitle,
      tableData: props.tableData
    }
    console.log(this.state)
  }

  render() {
    const state = this.state
    const lineHeight = 30
    const heightArr = [lineHeight, lineHeight, lineHeight, lineHeight]
    return (

      <Table style={style.table} >
        {/* <TableWrapper style={style.leftWrapper}>
          <Col data={state.tableTitle} heightArr={heightArr} textStyle={style.titleText}></Col>
        </TableWrapper>

         <TableWrapper style={style.rightWrapper}>
          <Cols data={state.tableData} heightArr={heightArr} textStyle={style.text} />
        </TableWrapper>
      </Table>
    )
  }
} */
