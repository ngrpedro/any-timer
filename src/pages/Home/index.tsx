import React from "react";
import { Play } from "phosphor-react";
import {
  HomeContainer,
  FormContainer,
  CountdownContainer,
  Separator,
  TaskInput,
  MinutesAmountInput,
  StartCountdownButton,
} from "./styles";

const Home = () => {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor="task">Projeto:</label>
          <TaskInput id="task" list="task-suggestions" placeholder="Projeto" />
          <datalist id="task-suggestions">
            <option value="EcoPlural"></option>
            <option value="Delivery"></option>
            <option value="Ignite Projects"></option>
          </datalist>

          <label htmlFor="minutesAmount">Tempo de foco</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton>
          <Play size={24} /> Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
};

export default Home;
