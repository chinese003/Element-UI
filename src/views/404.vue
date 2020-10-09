<h1>用户信息管理界面</h1>
    <el-row>
        <el-col :span="20" :push='2'>
            <div>
                <el-form :inline="true">
                    <el-form-item style="float: left" label="查询用户信息:">
                        <el-input v-model="keyUser" placeholder="查询所需要的内容......"></el-input>
                    </el-form-item>
                    <el-form-item style="float: right">
                        <el-button type="primary" size="small" icon="el-icon-edit-outline" @click="hanldeAdd()">添加</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="table">
                <el-table
                    :data="searchUserinfo(keyUser)"
                    border
                    style="width: 100%">
                    <el-table-column
                      type="index"
                      label="序号"
                      align="center"
                      width="60">
                    </el-table-column>
                    <el-table-column
                      label="日期"
                      align="center"
                      width="120">
                      <template slot-scope="scope">
                        <span>{{ scope.row.date | moment}}</span>
                      </template>
                    </el-table-column>
                    <el-table-column
                      label="姓名"
                      align="center"
                      width="100">
                      <template slot-scope="scope">
                        <span>{{ scope.row.name }}</span>
                      </template>
                    </el-table-column>
                    <el-table-column
                      label="邮箱"
                      align="center"
                      width="160">
                      <template slot-scope="scope">
                        <span>{{ scope.row.email }}</span>
                      </template>
                    </el-table-column>
                    <el-table-column
                      label="标题"
                      align="center"
                      width="160">
                      <template slot-scope="scope">
                        <span>{{ scope.row.title }}</span>
                      </template>
                    </el-table-column>
                    <el-table-column
                      label="评价"
                      align="center"
                      width="200">
                      <template slot-scope="scope">
                        <span>{{ scope.row.evaluate }}</span>
                      </template>
                    </el-table-column>
                    <el-table-column
                      label="状态"
                      align="center"
                      width="160">
                      <template slot-scope="scope">
                        <span>{{ scope.row.state }}</span>
                      </template>
                    </el-table-column>
                    <el-table-column label="操作" fixed="right">
                      <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
            </div>
        </el-col>
    </el-row>