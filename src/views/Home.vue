<template>
  <div class="home">
    <div style="background-color: #ececec; padding: 20px;">
      <a-row :gutter="16">
        <a-col :span="8">
          <a-card title="学习小组成员" :bordered="false">
            <p>{{ data.name1 }}</p>
            <p>{{ data.name2 }}</p>
            <p>{{ data.name3 }}</p>
            <p>{{ data.name4 }}</p>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card title="学习内容" :bordered="false">
            <p>前端Vue</p>
            <p>后端微服务</p>
            <p>关系型数据库</p>
            <p>大数据分析</p>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card title="使用工具" :bordered="false">
            <p>前端-Vdcode</p>
            <p>后端-Idea</p>
            <p>版本控制工具-Git</p>
            <p>团队协同工具-微信、石墨文档、印象笔记</p>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const data = {
      name1: "冯立民",
      name2: "申远",
      name3: "申振",
      name4: "冯立元"
    };
    return {
      data: data
    };
  }
};
</script>
