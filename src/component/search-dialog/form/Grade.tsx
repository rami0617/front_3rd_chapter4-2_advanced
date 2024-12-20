import { Checkbox, CheckboxGroup, FormControl, FormLabel, HStack } from '@chakra-ui/react';
import { memo } from 'react';

const Grade = memo(
  ({ grades, onChange }: { grades: (string | number)[]; onChange: (value: number[]) => void }) => {
    return (
      <FormControl>
        <FormLabel>학년</FormLabel>
        <CheckboxGroup value={grades} onChange={(value) => onChange(value.map(Number))}>
          <HStack spacing={4}>
            {[1, 2, 3, 4].map((grade) => (
              <Checkbox key={grade} value={grade}>
                {grade}학년
              </Checkbox>
            ))}
          </HStack>
        </CheckboxGroup>
      </FormControl>
    );
  }
);

export default Grade;
