'use client';
import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import {
  Box,
  Typography,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  TextField,
  Chip,
  Button,
  Stack,
  Paper
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {addComment} from '../../store/commentSlice'
import { RootState } from '@/app/store/Store';


const Comments: React.FC = () => {


const comment=useSelector((state:RootState)=>state.comments.text)
 const dispatch=useDispatch()
  const [filterType, setFilterType] = useState<'specific' | 'any'>('specific');
  const [inputValue, setInputValue] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);
  const exampleTags = ['Price', 'Link', 'Shop'];

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selected = event.target.value as 'specific' | 'any';
    setFilterType(selected);
    if (selected === 'any') {
      setInputValue('');
      setTags([]);
    }
  };
  console.log(comment);
  

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(event.target.value);
    dispatch(addComment(newValue))
  };

  const handleInputKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue.trim()) {
      const newTags = inputValue
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0 && !tags.includes(tag));
      setTags(prev => [...prev, ...newTags]);
      setInputValue('');
    }
  };

  const handleTagDelete = (tagToDelete: string) => {
    setTags(tags.filter(tag => tag !== tagToDelete));
  };

  const handleExampleClick = (tag: string) => {
    const name =exampleTags.find((tags)=>tags==tag)
    if(name){
     setInputValue(name)
    }
    dispatch(addComment(name))
    if (!tags.includes(tag)) {
      setTags(prev => [...prev, tag]);
    }
  };
  return (<> 


    <Box width="100%" maxWidth={400} p={2}>

      
      <Typography fontWeight={600} mb={2}>
        And this comment has
      </Typography>

      <FormControl component="fieldset" fullWidth>
        <RadioGroup value={filterType} onChange={handleFilterChange}>
          {/* Specific Option */}
          <Paper
            variant="outlined"
            sx={{
              borderRadius: 2,
              bgcolor: '#f5f5f7',
              p: 2,
              mb: 2,
              borderColor: filterType === 'specific' ? 'grey.300' : 'grey.200'
            }}
          >
            <FormControlLabel
              value="specific"
              control={<Radio size="small" />}
              label="a specific word or words"
              sx={{ alignItems: 'flex-start' }}
            />

            {filterType === 'specific' && (
              <Box mt={2}>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  placeholder="Enter a word or multiple"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyPress={handleInputKeyPress}
                  InputProps={{
                    sx: { borderRadius: 2 }
                  }}
                />

                <Typography variant="caption" color="text.secondary" mt={1} display="block">
                  Use commas to separate words
                </Typography>

                {tags.length > 0 && (
                  <Stack direction="row" spacing={1} flexWrap="wrap" mt={2}>
                    {tags.map(tag => (
                      <Chip
                        key={tag}
                        label={tag}
                        onDelete={() => handleTagDelete(tag)}
                        color="primary"
                        variant="outlined"
                      />
                    ))}
                  </Stack>
                )}

                <Box mt={2} display="flex" alignItems="center" gap={1} flexWrap="wrap">
                  <Typography variant="caption" color="text.secondary">
                    For example:
                  </Typography>
                  {exampleTags.map(tag => (
                    <Button
                      key={tag}
                      size="small"
                      variant="outlined"
                      onClick={() => handleExampleClick(tag)}
                      sx={{
                        textTransform: 'none',
                        borderRadius: 999,
                        padding: '2px 12px',
                        fontSize: '0.8rem',
                        minWidth: 0
                      }}
                    >
                      {tag}
                    </Button>
                  ))}
                </Box>
              </Box>
            )}
          </Paper>

          {/* Any Option */}
          <Paper
            variant="outlined"
            sx={{
              borderRadius: 2,
              bgcolor: '#f5f5f7',
              p: 2,
              borderColor: filterType === 'any' ? 'grey.300' : 'grey.200'
            }}
          >
            <FormControlLabel
              value="any"
              control={<Radio size="small" />}
              label="any word"
            />
          </Paper>
        </RadioGroup>
      </FormControl>
    </Box>
  </>);
};

export default Comments;
