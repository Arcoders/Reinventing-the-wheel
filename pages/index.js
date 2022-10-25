import { useState, useEffect } from 'react';
import { Modal, Character, Pagination, CharacterDetails } from '../components';

import { Gallery } from './styles';
import { API_URL, TITLE } from '../constants';
import { useFetch } from '../hooks/useFetch';

export async function getServerSideProps() {
  try {
    const data = await (await fetch(API_URL, {})).json();
    return {
      props: { ...data },
    };
  } catch (error) {
    return {
      props: { error }
    };
  }
}

export default function Home(props) {
  const [url, setUrl] = useState();
  const [modal, setModal] = useState({character: null});
  const { call, data = props } = useFetch(url, {}, { init: true });

  useEffect(() => {
    if (url) call()
  }, [url]);

  const { results: characters, info: pagination } = data;

  const toggleModal = character => setModal({character})

  const handleOnPageChange = currentPage => setUrl(`${API_URL}?page=${currentPage}`)

  return (
      <Gallery.Container>
        <Gallery.Title>{TITLE}</Gallery.Title>
        <Gallery.Result>
          {characters.map((character) => <Character toggleModal={toggleModal} key={character.id} {...character} />)}
        </Gallery.Result>
        <Pagination totalPages={pagination.pages} handleOnPageChange={handleOnPageChange}/>
        {modal.character && (
          <Modal toggleModal={toggleModal}>
            <CharacterDetails toggleModal={toggleModal} {...modal.character} />
          </Modal>
        )}
      </Gallery.Container>
  );
}
