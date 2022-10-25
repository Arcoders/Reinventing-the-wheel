import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faClose, faCrosshairs } from "@fortawesome/free-solid-svg-icons";  
import { RESIDENTS_TEXT } from '../constants';
import {useFetch} from "../hooks/useFetch"
import { Info } from './styles';

const CharacterDetails = (props) => {
  const { name, image, toggleModal, origin } = props;
  const {data: residents} = useFetch(origin.url, {}, {embeddedFetchKey: 'residents'});

  return (
    <Info.Container onClick={event => event.stopPropagation()}>
      <Info.Close onClick={() => toggleModal(null)}><Icon icon={faClose}/></Info.Close>
      <Info.Image alt={name} src={image} />
      <Info.Title>{name}</Info.Title>
      <Info.Location><Icon icon={faCrosshairs}/> {origin.name}</Info.Location>
      {residents && <Info.Location>{RESIDENTS_TEXT} {origin.name}</Info.Location>}
      <Info.Residents>
        {residents?.map(resident => <Info.ResidentImage alt={resident.name} key={resident.id} src={resident.image}/>)}
      </Info.Residents>
    </Info.Container>
  );
};

export default CharacterDetails;
