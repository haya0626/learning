import { FormControl, FormControlLabel, Grid, MenuItem, Radio, RadioGroup, TextField } from "@mui/material";
import { GridItem } from "../../../layouts/GridItem";
import { FormItem } from "../../../atoms/FormItem";

export default function Sample1Header() {
    return (
        <>
            <Grid>
                <GridItem columnsPerRow={1}>
                    <FormItem
                        label="ユーザー名"
                        id="userName">
                        <TextField id="userName" fullWidth size="small" />
                    </FormItem>
                </GridItem>

                <GridItem columnsPerRow={2}>
                    <FormItem label="職員番号" id="employeeNumber">
                        <TextField
                            id="employeeNumber"
                            select
                            fullWidth
                            size="small"
                            defaultValue=""
                        >
                            <MenuItem value="">選択してください</MenuItem>
                            <MenuItem value="001">001</MenuItem>
                            <MenuItem value="002">002</MenuItem>
                        </TextField>
                    </FormItem>
                </GridItem>
            </Grid>

            <Grid>
                <GridItem columnsPerRow={1}>
                    <FormItem label="性別" id="gender">
                        <FormControl>
                            <RadioGroup row name="gender">
                                <FormControlLabel
                                    value="male"
                                    control={<Radio size="small" />}
                                    label="男性"
                                />
                                <FormControlLabel
                                    value="female"
                                    control={<Radio size="small" />}
                                    label="女性"
                                />
                            </RadioGroup>
                        </FormControl>
                    </FormItem>
                </GridItem>
            </Grid>

            <Grid>
                <GridItem columnsPerRow={1} rowSpan={3}>
                    <FormItem label="備考" id="remarks">
                        <TextField
                            id="remarks"
                            fullWidth
                            multiline
                            rows={4}
                            size="small"
                        />
                    </FormItem>
                </GridItem>
            </Grid>
        </>
    );
}