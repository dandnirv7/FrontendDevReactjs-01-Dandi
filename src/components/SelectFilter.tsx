import React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";

interface optionsItem {
  value: string;
  name: string;
}

interface SelectFilterProps {
  options: optionsItem[];
  placeholder: string;
  value?: string;
  onValueChange: (value: React.SetStateAction<string | null>) => void;
}

const SelectFilter: React.FC<SelectFilterProps> = ({
  options,
  placeholder,
  value,
  onValueChange,
}) => {
  return (
    <>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};

export default SelectFilter;
