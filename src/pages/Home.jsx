import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../redux/slices/recipeSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { allRecipes, loading, errorMsg } = useSelector((state) => state.recipeReducer);
  console.log(allRecipes, loading, errorMsg);

  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 8;
  const totalPages = Math.ceil(allRecipes?.length / recipesPerPage);
  const currentPageRecipeLastIndex = currentPage * recipesPerPage;
  const currentPageRecipeFirstIndex = currentPageRecipeLastIndex - recipesPerPage;
  const visibleAllRecipes = allRecipes.slice(currentPageRecipeFirstIndex, currentPageRecipeLastIndex);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  const navigateToNextPage = () => {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const navigateToPrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <Header />
      <div style={{paddingTop:'100px'}}>
        <div  className="container pt-5">
          {loading ? (
            <div className="d-flex justify-content-center align-items-center my-5">
              <img
                style={{ width: '70px', height: '70px' }}
                src="https://media4.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif?cid=6c09b952sbhra8qju2s317sohqxfvm2774y3zfvod0fs9tu4&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g"
                alt="Loading..."
              />
              <span className="ms-3">Loading...</span>
            </div>
          ) : (
            <>
              <div className="row g-4">
                {allRecipes?.length > 0 ? (
                  visibleAllRecipes?.map((recipe) => (
                    <div key={recipe?.id} className="col-md-3">
                      <div className="card shadow">
                        <img
                          src={recipe?.image}
                          className="card-img-top"
                          style={{ height: '300px', objectFit: 'cover' }}
                          alt={recipe?.name}
                        />
                        <div className="card-body text-center">
                          <h5 className="card-title">{recipe?.name}</h5>
                          <Link to={`/${recipe?.id}/view`} className="btn btn-primary mt-3">
                            View More..
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="d-flex justify-content-center align-items-center text-danger fw-bold my-5">
                    Recipe Not Found!!!
                  </div>
                )}
              </div>
              <div className="d-flex justify-content-center align-items-center mt-5">
                <button
                  className="btn btn-secondary me-3"
                  onClick={navigateToPrevPage}
                  disabled={currentPage === 1}
                >
                  <i className="fa-solid fa-backward"></i>
                </button>
                <span className="fw-bold mx-3">
                  {currentPage} of {totalPages}
                </span>
                <button
                  className="btn btn-secondary"
                  onClick={navigateToNextPage}
                  disabled={currentPage === totalPages}
                >
                  <i className="fa-solid fa-forward"></i>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
