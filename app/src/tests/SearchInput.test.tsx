import { useForm } from "react-hook-form";
import { SearchInput } from "../components/molecules/searchInput/SearchInput";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

interface FormValues {
    test: string
};

interface TestComponentProps {
    onSearch: () => void
}

const TestComponent = ({ onSearch }: TestComponentProps) => {
    const { control } = useForm<FormValues>({
        defaultValues: {
            test: "",
        },
    });

    return (
        <SearchInput
            id="test"
            name="test"
            control={control}
            onSearch={onSearch}
        />
    );
};

describe("SearchInput", () => {
    test("入力欄が表示されること", () => {
        render(<TestComponent onSearch={jest.fn()} />);

        const input = screen.getByRole("textbox");

        expect(input).toBeInTheDocument();
    });

    test("入力できること", async () => {
        const user = userEvent.setup();

        render(<TestComponent onSearch={jest.fn()} />);

        const input = screen.getByRole("textbox");

        await user.type(input, "テスト");

        expect(input).toHaveValue("テスト");
    });

    test("検索ボタンをクリックすると onSearch が呼ばれること", async () => {
        const user = userEvent.setup();

        const onSearch = jest.fn();

        render(<TestComponent onSearch={onSearch} />);

        const button = screen.getByRole("button");

        await user.click(button);

        expect(onSearch).toHaveBeenCalledTimes(1);
    });
});