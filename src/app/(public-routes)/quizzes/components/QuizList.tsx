'use client'

import { Box, Button } from "@mui/material";
import { QuizListRow } from "./QuizRow";
import { Add } from "@mui/icons-material";

export const QuizList = () => {
    console.log('a log from quizlist!!!');

    return (
    <>
    <Button sx={{ background: 'red'}} variant="contained" color="success" startIcon={<Add/>}> Add New Quiz</Button>
    <Box>
    <QuizListRow />
    <QuizListRow />
    <QuizListRow />
    </Box>
    
    </>)
}