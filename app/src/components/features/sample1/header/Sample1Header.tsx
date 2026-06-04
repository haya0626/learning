import { FormControlLabel, MenuItem, Radio, RadioGroup, TextField } from "@mui/material";
import { COL_SPAN, COL_START, GridItem } from "../../../layouts/GridItem";
import { FormItem } from "../../../atoms/FormItem";
import { Grid } from "../../../layouts/Grid";

export default function Sample1Header() {
    return (
        <>
            <Grid>
                <GridItem colStart={COL_START.LEFT} colSpan={COL_SPAN.M}>
                    <FormItem
                        label="ユーザー名"
                        id="userName">
                        <TextField id="userName" fullWidth size="small" />
                    </FormItem>
                </GridItem>

                <GridItem colStart={COL_START.RIGHT} colSpan={COL_SPAN.M}>
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
                <GridItem colStart={COL_START.LEFT} colSpan={COL_SPAN.M}>
                    <FormItem
                        label="郵便番号"
                        id="adressNumber">
                        <TextField id="adressNumber" fullWidth size="small" />
                    </FormItem>
                </GridItem>
            </Grid>

            <Grid>
                <GridItem colStart={COL_START.LEFT} colSpan={COL_SPAN.M}>
                    <FormItem
                        label="住所"
                        id="adress">
                        <TextField id="adress" fullWidth size="small" />
                    </FormItem>
                </GridItem>
            </Grid>

            <Grid>
                <GridItem colStart={COL_START.LEFT} colSpan={COL_SPAN.M}>
                    <FormItem label="性別" id="gender">
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
                    </FormItem>
                </GridItem>
            </Grid>
        </>
    );
}