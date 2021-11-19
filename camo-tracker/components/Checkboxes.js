
import PackTactics from '../components/camoFunctions/PackTactics'
import Surgical from '../components/camoFunctions/Surgical'
import Predatory from '../components/camoFunctions/Predatory'
import Reptilian from '../components/camoFunctions/Reptilian'
import Deadeye from '../components/camoFunctions/Deadeye'
import Berserker from '../components/camoFunctions/Berserker'
import Wildcat from '../components/camoFunctions/Wildcat'
import Survivalist from '../components/camoFunctions/Survivalist'
import Mindgames from '../components/camoFunctions/Mindgames'
import Death from '../components/camoFunctions/Death'


export default function Checkboxes() {

    return (

        <td colSpan="4">
            <div className="columns">
                <div className="column">
                    <p className="title is-size-6 has-text-centered">Pack Tactics</p>
                    <div className="columns is-flex-direction-column">
                        <PackTactics></PackTactics>
                    </div>
                </div>
                <div className="column">
                    <p className="title is-size-6 has-text-centered">Surgical</p>
                    <div className="columns is-flex-direction-column">
                        <Surgical></Surgical>
                    </div>
                </div>
                <div className="column">
                    <p className="title is-size-6 has-text-centered">Predatory Ambition</p>
                    <div className="columns is-flex-direction-column">
                        <Predatory></Predatory>
                    </div>
                </div>
                <div className="column">
                    <p className="title is-size-6 has-text-centered">Reptilian</p>
                    <div className="columns is-flex-direction-column">
                        <Reptilian></Reptilian>
                    </div>
                </div>
                <div className="column">
                    <p className="title is-size-6 has-text-centered">Deadeye</p>
                    <div className="columns is-flex-direction-column">
                        <Deadeye></Deadeye>
                    </div>
                </div>
                <div className="column">
                    <p className="title is-size-6 has-text-centered">Berserker</p>
                    <div className="columns is-flex-direction-column">
                        <Berserker></Berserker>
                    </div>
                </div>
                <div className="column">
                    <p className="title is-size-6 has-text-centered">Wildcat</p>
                    <div className="columns is-flex-direction-column">
                        <Wildcat></Wildcat>
                    </div>
                </div>
                <div className="column">
                    <p className="title is-size-6 has-text-centered">Survivalist</p>
                    <div className="columns is-flex-direction-column">
                        <Survivalist></Survivalist>
                    </div>
                </div>
                <div className="column">
                    <p className="title is-size-6 has-text-centered">Mindgames</p>
                    <div className="columns is-flex-direction-column">
                        <Mindgames></Mindgames>
                    </div>
                </div>
                <div className="column">
                    <p className="title is-size-6 has-text-centered">Death Artist</p>
                    <div className="columns is-flex-direction-column">
                        <Death></Death>
                    </div>
                </div>
            </div>
        </td>
    )

}