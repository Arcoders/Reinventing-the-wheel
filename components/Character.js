import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { Character } from './styles';

const Card = (character) => (
    <Character.Container onClick={() => character.toggleModal(character)}>
        <Character.Image src={character.image} alt={character.name} />
        <Character.Title>{character.name}</Character.Title>
        <Character.Origin><Icon icon={faCrosshairs} /> {character.origin.name}</Character.Origin>
    </Character.Container>
  )

export default Card