import yoHistory from '$common/history';
import './index.scss';


class App extends Component{
	render(){
		return (
			<section className="yo-tab yo-tab-view m-tabview" >
				<IndexLink to="/" activeClassName="active">Home</IndexLink>
                <NavLink to="/" className="item item-y-ico item-on"><i className="yo-ico">&#xf04a;</i>Home </NavLink>
                <NavLink to="/list" className="item item-y-ico" touchClass="m-content-active"><i className="yo-ico">&#xf029;</i>Profile </NavLink>
                <NavLink to="/detail" className="item item-y-ico"><i className="yo-ico">&#xf067;</i>Detail </NavLink>
             </section>
		)
	} 
}

export default App;