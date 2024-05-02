import { render, screen, fireEvent } from '@testing-library/react';
import GadgetDetails from './Components/GadgetDetails';
import GadgetShowCase from './Components/GadgetShowCase';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';
import { PORT8000URL } from './port8000url'


const gadgetsArray = [
  { "id": 1, "itemName": "Mobile", "brandName": "Vivo", "units": 5, "price": 13000.0 },
  { "id": 2, "itemName": "Washing Machine", "brandName": "LG", "units": 3, "price": 15000.0 }
]

test('Check GadgetShowcase Component', async () => {
  render(
    <Router>
      <Routes>
        <Route exact path="/" element={
          <GadgetShowCase url={PORT8000URL} />
        } />
      </Routes>
    </Router>
  )
  expect(await screen.findByTestId("gadgetcard-1")).toBeTruthy();
  expect(await screen.findByTestId("gadgetcard-2")).toBeTruthy();

  expect(screen.queryByTestId("title-1")).toHaveTextContent(gadgetsArray[0].brandName + ' ' + gadgetsArray[0].itemName);
  expect(screen.queryByTestId("price-1")).toHaveTextContent(gadgetsArray[0].price);

  expect(screen.queryByTestId("title-2")).toHaveTextContent(gadgetsArray[1].brandName + ' ' + gadgetsArray[1].itemName);
  expect(screen.queryByTestId("price-2")).toHaveTextContent(gadgetsArray[1].price);
})

test('Check GadgetDetails Elements present', async () => {
  render(
    <Router>
      <Routes>
        <Route exact path="" element={
          <GadgetDetails id="1" url={PORT8000URL} />
        } />
      </Routes>
    </Router>
  )
  expect(await screen.findByTestId("header")).toBeTruthy();
  expect(await screen.findByTestId("price")).toBeTruthy();
  expect(await screen.findByTestId("units")).toBeTruthy();
  expect(await screen.findByTestId("brand")).toBeTruthy();
  expect(await screen.findByTestId("category")).toBeTruthy();
  expect(await screen.findByTestId("goBackBtn")).toBeTruthy();
})

test('Check GadgetDetails Elements to have required values', async () => {
  render(
    <Router>
      <Routes>
        <Route exact path="" element={
          <GadgetDetails id="1" url={PORT8000URL} />
        } />
      </Routes>
    </Router>
  )
  expect(await screen.findByTestId("header")).toHaveTextContent("Vivo Mobile");
  expect(await screen.findByTestId("price")).toHaveTextContent("13000");
  expect(await screen.findByTestId("units")).toHaveTextContent("5");
  expect(await screen.findByTestId("brand")).toHaveTextContent("Vivo");
  expect(await screen.findByTestId("category")).toHaveTextContent("Mobile");
})



