import React, { useContext } from "react";
import { HistoryContainer, HistoryList, Status } from "./styles";
import { CyclesContext } from "./../../context/CyclesContext";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

const History = () => {
  const { cycles } = useContext(CyclesContext);

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>


    </HistoryContainer>
  );
};

export default History;
