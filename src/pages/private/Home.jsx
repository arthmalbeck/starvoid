import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../../components/layout/Navbar';

import {
  Button, Container, Row
} from 'reactstrap';

import { LIST_CHARACTER } from '../../handler/character/actionTypes';
import InfoCard from '../../components/common/Card/InfoCard';
import Loading from '../../components/common/Loading';

const Home = () => {
  
  const [page, setPage] = useState("page=1");

  const dispatch = useDispatch();
  const characterReducer = useSelector((state) => state.entities.characterReducer);
  let {list, loading} = characterReducer;

  useEffect(()=>{
    dispatch({ type: LIST_CHARACTER, page: page });
  }, []);

  function renderCard(values) {
    return (
      <React.Fragment key={values.name}>
        <InfoCard item={values}/>
      </React.Fragment>
    )
  }

  const paginateTo = page =>{
    let parts = page.split("?");
    dispatch({ type: LIST_CHARACTER, page: parts[1] });
  }

  return (
    <>
      {loading == true ? 
      <Loading/>:
      <>
        <Navbar/>
        <Container className='body-content'>
          <Row>
            {list == null ? <></> : 
              list.results.map(item => renderCard(item))
            }
          </Row>

          <div className="pagination-options">
            {list == null ? <></> : 
              list.previous == null ? <></> :
              <Button onClick={() => paginateTo(list.previous)}>Previous Page</Button>
            }
            {list == null ? <></> : 
              list.next == null ? <></> :
              <Button onClick={() => paginateTo(list.next)}>Next Page</Button>
            }
          </div>
        </Container>
      </>
      }
    </>
  );
};

export default Home;