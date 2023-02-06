import React, { useContext } from "react";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../context/CyclesContext";

const NewCycleForm = () => {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="task">Projeto:</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Projeto"
        disabled={!!activeCycle}
        {...register("task")}
      />
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
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
      />
    </FormContainer>
  );
};

export default NewCycleForm;
