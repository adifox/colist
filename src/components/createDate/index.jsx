import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import colors from './color-scheme';
// import classes from './CreateDate.css';

const muiTheme = getMuiTheme({
  palette: {
    pickerHeaderColor: colors.ORANGE,
    primary1Color: colors.PAGE_BLUE,
    primary2Color: colors.PAGE_BLUE,
    canvasColor: colors.YELLOW,
    textColor: colors.WHITE,

  }
});

class CreateDate extends Component {
  state = {
    value: 1
  }

  handleChange = (event, index, value) => this.setState({value});
  
  render() {
    return(
      <div>
        <Grid>
          <Row className="show-grid">
            <Col sm={ 6 } md={ 6 } lg={ 6 }>
              <MuiThemeProvider muiTheme={ muiTheme }>
                <DatePicker
                  hintText="Elija Fecha"
                  hintStyle={{ color: colors.WHITE }}
                  DateTimeFormat={ Intl.DateTimeFormat }
                  okLabel="OK"
                  cancelLabel="Cancelar"
                  locale='es'/>
                <TimePicker
                  format="24hr"
                  cancelLabel="Cancelar"
                  hintText="Elija Hora"
                  hintStyle={{ color: colors.WHITE }}
                />
                <SelectField
                  value={ this.state.value }
                  onChange={ this.handleChange }
                >
                  <MenuItem value={ 1 } primaryText="Elija Centro" />
                  <MenuItem value={ 2 } primaryText="Madrid 1" />
                  <MenuItem value={ 3 } primaryText="Madrid 2" />
                  <MenuItem value={ 4 } primaryText="Madrid 3" />
                  <MenuItem value={ 5 } primaryText="Madrid 4" />
                </SelectField>
              </MuiThemeProvider>
            </Col>
            <Col sm={ 6 } md={ 6 } lg={ 6 }>
              <p>The rest of the col</p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default CreateDate;