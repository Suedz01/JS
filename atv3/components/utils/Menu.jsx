import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import SideNav, { NavItem, NavIcon, NavText} from "@trendmicro/react-sidenav";
import Cliente from '../cadastros/Cliente.jsx';
import 'font-awesome/css/font-awesome.css'
import "@trendmicro/react-sidenav/dist/react-sidenav.css";


export default function Menu() {
    return (
        <Router>
            <Route render={({ location, history }) => (
                <React.Fragment>
                    <SideNav
                        onSelect={(selected) => {
                            const to = '/home/' + selected;
                            if (location.pathname !== to) {
                                history.push(to);
                            }
                        }}
                    >
                        {/* fa fa-fw fa-address-book */}
                        <SideNav.Toggle />
                        <SideNav.Nav defaultSelected="home">
                            <NavItem eventKey="home">
                                <NavIcon>
                                    <i className="fa fa-fw fa-address-book" style={{ fontSize: "1.75em" }} />
                                </NavIcon>
                                <NavText>Cadastro</NavText>
                                <NavItem eventKey="cadastro/cliente">
                                    <NavText>Cliente</NavText>
                                </NavItem>
                                <NavItem eventKey="cadastro/aluno">
                                    <NavText>Aluno</NavText>
                                </NavItem>

                            </NavItem>
                            <NavItem eventKey="charts">
                                <NavIcon>
                                    <i
                                        className="fa fa-fw fa-line-chart"
                                        style={{ fontSize: "1.75em" }}
                                    />
                                </NavIcon>
                                <NavText>Charts</NavText>
                                <NavItem eventKey="charts/linechart">
                                    <NavText>Line Chart</NavText>
                                </NavItem>
                                <NavItem eventKey="charts/barchart">
                                    <NavText>Bar Chart</NavText>
                                </NavItem>
                            </NavItem>
                        </SideNav.Nav>
                    </SideNav>
                    <main>
                        <Route path="/home/" />
                        <Route path="/home/cadastro/cliente" component={props => <Cliente />} />
                    </main>
                </React.Fragment>
            )}
            />
        </Router>
    );
}