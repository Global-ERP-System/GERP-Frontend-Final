import React, { Component } from 'react'
import Toolbar from './Toolbar/ToolbarF'
import SideDrawer from './SideDrawer/SideDrawerF'
import Backdrop from './Backdrop/Backdrop'


class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            sideDrawerOpen:false
        }
    }
  
    drawerToggleClickHandler = () => {
        this.setState(prevState => {
            return {
                sideDrawerOpen:!prevState.sideDrawerOpen
            }
        })
    }

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen:false})
    }

    render(){
        let backdrop
        

        if(this.state.sideDrawerOpen){
            backdrop=<Backdrop click={this.backdropClickHandler} />
            
        }

        return(
            <div style={{height:'100%'}}>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}
                <main style={{marginTop:'64px'}}>
                    <p></p>
                </main>
            </div>
        )

    }
}

export default Header;